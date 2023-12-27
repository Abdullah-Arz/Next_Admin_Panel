"use client"

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Avatar,
} from "@nextui-org/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useMyContext } from "@/app/context";
import Btn_Loader from '../Btn_loader/page'
export default function EditBlogModal({
  isOpen,
  onOpenChange,
  blog_id,
  state_img,
  state_title,
  state_description,
}) {
  const [image, setImage] = useState(''); // Set the initial image from props
  const [title, setTitle] = useState(state_title);
  const [description, setDescription] = useState(state_description);
  const [uploadimg, setuploadimg] = useState('');
  const [load, setLoad] = useState(false);

  const api = localStorage.getItem("api") 
  const token = typeof window !== "undefined" ? sessionStorage.getItem("Token") : null;

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const { update_blog_post_content,blog_post_content}=useMyContext()

  useEffect(() => {
    console.log('state_img',state_img)
    setImage(state_img);
    setTitle(state_title);
    setDescription(state_description);
  }, [onOpenChange]);

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoad(true);

    // Create a FormData object to send the image file and other data
    const formData = new FormData();

    if (e.target.image.files.length > 0) {
      formData.append("blog_image", e.target.image.files[0]); // Add the image file
    }
    formData.append("title", title);
    formData.append("content", description);

      await axios.post(
        `${api}/user_management/blog_update/${blog_id}/`,
        formData,
        { headers }
      ).then((response)=>{
        if (response.data.status === true) {
           toast.success("Content Edit Successful");
            setLoad(false);
           onOpenChange(false); // Close the modal
           update_blog_post_content(blog_post_content+1);
        } else {
          toast.error("Error editing blog");
          setLoad(false);
        }
      }).catch(
        (error)=>{
          toast.error("Error editing blog");
          setLoad(false);
        }
      )
     
  
  };

  const handleImageSelector = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setuploadimg(URL.createObjectURL(file)); // Update the image preview
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => onOpenChange(!isOpen)}
        isDismissable={false}
        size="4xl"
        placement="center"
      >
        <ModalContent>
          <form onSubmit={handleEdit}>
            <ModalHeader className="text-xl font-semibold">Edit Blog</ModalHeader>
            <ModalBody>
              <Avatar
                className="mb-4 mt-5 cursor-pointer w-28 h-28 text-large"
                src={uploadimg ? uploadimg :  api + "/" + image} // Display the current image or the default one
                onClick={() => document.getElementById("imageSelector").click()}
              ></Avatar>
              <input
                id="imageSelector"
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleImageSelector}
              />
              <Input
                type="text"
                label="Title"
                labelPlacement="outside"
                placeholder="Title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mb-4"
              />
              <Textarea
                label="Description"
                labelPlacement="outside"
                placeholder="Enter your description"
                minRows={6}
                className="mb-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="error"
                variant="bordered"
                onPress={() => onOpenChange(false)}
              >
                Close
              </Button>
              {load ? (
                <Button className="bg-slate-500 text-slate-50" disabled>
                 <Btn_Loader/>
                </Button>
              ) : (
                <Button className="bg-slate-800 text-slate-50" type="submit">
                  Save
                </Button>
              )}
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
