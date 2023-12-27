"use client";
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function MyProvider({ children }) {
  const [state, setState] = useState("Initial Value");
  const [static_content, set_static_content] = useState(false);
  const [blog_content, set_blog_content] = useState(false);
  const [static_driver, set_static_driver] = useState(0);
  const [static_recruiter, set_static_recruiter] = useState(false);
  const [notification, set_notification] = useState(0);
  const [static_deletecontent, set_static_deletecontent] = useState(0);
  const [viewpost_id, set_viewpost_id] = useState("");
  const [upload_blog, set_upload_blog] = useState(0);
  const [hidden_post_context, set_hidden_post_context] = useState(false);
  const [reported_post, set_reported_post] = useState(false);
  const [blog_post_content, set_blog_post_content] = useState(0);

  const updateState = (newValue) => {
    setState(newValue);
  };
  const update_Static_content = (newValue) => {
    set_static_content(newValue);
  };

  const update_Blog_content = (newValue) => {
    set_blog_content(newValue);
  };

  const update_Driver = (newValue) => {
    set_static_driver(newValue);
  };
  const update_Recruiter = (newValue) => {
    set_static_recruiter(newValue);
  };

  const update_Notification = (newValue) => {
    set_notification(newValue);
  };

  const delete_Static_content = (newValue) => {
    set_static_deletecontent(newValue);
  };
  
  const update_upload_blog = (newValue) => {
    set_upload_blog(newValue);
  };
  const update_hidden_post_context = (newValue) => {
    set_hidden_post_context(newValue);
  };
  const update_blog_post_content = (newValue) => {
    set_blog_post_content(newValue);
  };

  const view_PostId = (newValue) => {
    set_viewpost_id(newValue);
  };

  const reported_Post = (newValue) => {
    set_reported_post(newValue);
  };

  return (
    <MyContext.Provider
      value={{
        state,
        updateState,
        static_content,
        update_Static_content,
        update_Driver,
        static_driver,
        update_Notification,
        notification,
        update_Recruiter,
        static_recruiter,
        delete_Static_content,
        static_deletecontent,
        update_Blog_content,
        blog_content,
        view_PostId,
        viewpost_id,
        update_upload_blog,
        upload_blog,
        hidden_post_context, 
        update_hidden_post_context,
        reported_Post,
        reported_post,
        update_blog_post_content,
        blog_post_content
      }}
    > 
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
