"use client";

import { useEffect, useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@nextui-org/react";

export default function page(props) {
  const API = localStorage.getItem("api");
  const Token = sessionStorage.getItem("Token");
  const [state_recipe, set_recipe] = useState("");
  const [state_description, set_description] = useState("");
  const [state_yield, set_yield] = useState("");
  const [state_prep_time, set_prep_time] = useState("");
  const [state_cook_time, set_cook_time] = useState("");
  const [state_total_time, set_total_time] = useState("");
  const [state_ingridients, set_ingridients] = useState("");
  const [load,set_load]=useState('')
//   const { static_content, update_Static_content } = useMyContext();

console.log('Recipe Modal Comp -------', props.props)

useEffect(()=>{
    if(props.props){
       console.log('props.recipe',props)
       set_recipe(props.props.recipe)
       set_description(props.props.description)
       set_yield(props.props.yield)
       set_prep_time(props.props.prep_time)
       set_cook_time(props.props.cook_time)
       set_total_time(props.props.total_time)
       set_ingridients(props.props.ingridients)
        
    }
      
      },[props])

      const saveData=(e)=>{
        e.preventDefault()
        props.onClose()
        // alert()
        // const formData = {
        //   type:selected === "1" ? "Term_and_Condition" : "Privacy_Policy",
        //   heading: selected_title,
        //   content:selected_content,
        //   role: props.currentRoute === '/pro_policy' ? 'pro': 'user'
        //   };
        //   axios.post(`${API}/user/create_terms_conditions_or_privacy_policy/`,formData,{ headers }).then((res)=>{
        //     toast.success(res.data.message);
        //     static_content=== true ? update_Static_content(false):update_Static_content(true)
        //     set_load(false)
        //     document.getElementById('closeHandle').click();
      
        //   }).catch(((err)=>{
        //     toast.error("Some thing went wrong");
        //     set_load(false)
      
      
        // }))
      }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        isDismissable={false}
        size="4xl"
        placement="center"
        className="bg-bgColor"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                Recipe Details
              </ModalHeader>
              <form onSubmit={saveData}>
                <ModalBody className="px-4">
                  <div className="w-full">
                    <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">
                      Recipe Name<span className="text-red-700 p-1">*</span>
                    </h4>
                    <input
                      type="text"
                      name="title"
                      label="Title"
                      value={state_recipe}
                      onChange={(e) => {
                        set_recipe(e.target.value);
                      }}
                      placeholder="Enter your Title"
                      className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">
                      {" "}
                      Description{" "}
                      <span className="text-red-700 p-1">*</span>
                    </h4>

                    <textarea
                      name="description"
                      label="Description"
                      value={state_description}
                      onChange={(e) => {
                        set_description(e.target.value);
                      }}
                      className="bg-[#00000040] text-[#ffffffa3] w-full text-base  p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                      placeholder="Enter your description"
                      rows="3"
                      cols="50"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
           
            <div className="w-[25%] pr-4">
            <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">Yield<span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={state_yield}
                onChange={(e)=>{set_yield(e.target.value)}}
                placeholder="Enter your Title"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
            </div>
            <div className="w-[25%] pr-4">
            <h4 className="text-[#ffffffa3] text-sm my-4 capitalize"> preparation time <span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={state_prep_time}
                onChange={(e)=>{set_prep_time(e.target.value)}}
                placeholder="Enter your Time"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
              
            </div>
            <div className="w-[25%] pr-4">
            <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">cook time <span className="text-red-700 p-1">*</span></h4>
              <input
                id="blog_date"
                type="text"
                name="title"
                label="Title"
                value={state_cook_time}
                onChange={(e)=>{set_cook_time(e.target.value)}}
                placeholder="Enter your Time"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
            </div>
            <div className="w-[25%] pr-4">
            <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">total time <span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={state_total_time}
                onChange={(e)=>{set_total_time(e.target.value)}}
                placeholder="Enter your Time"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
              
            </div>
          
        </div>

        <div>
                    <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">
                      {" "}
                      ingredients{" "}
                      <span className="text-red-700 p-1">*</span>
                    </h4>

                    <textarea
                      name="description"
                      label="Description"
                      value={state_ingridients}
                      onChange={(e) => {
                       set_ingridients(e.target.value);
                      }}
                      className="bg-[#00000040] text-[#ffffffa3] w-full text-base  p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                      placeholder="Enter your description"
                      rows="5"
                      cols="50"
                      required
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                <Button color="danger" id="closeHandle" onPress={onClose}>
                  Close
                </Button>
                {
                  load?
                  <Button className="bg-slate-500 text-[#ffffffa3]" disabled={true}>
                   <Btn_Loader/>
                  </Button>
                :
                  <Button type="submit" color="success" variant="bordered"  >
                    Update
                  </Button>
                }
               
              </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
