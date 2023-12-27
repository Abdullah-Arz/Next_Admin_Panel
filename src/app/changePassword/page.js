
"use client"
import React, { useState } from 'react'
import DashboardLayout from '../component/DashboardLayout/page'
import Notification_form from '../component/notification_form/page'
import ChangePassword from '../component/changePassword_form/page'
import {Select,SelectItem} from "@nextui-org/react";


function page() {
    const [selected, setSelected] = useState("Term and Condition");

   
  return (
    <DashboardLayout>
      <div className='px-96 bg-slate-50 mt-16'>
        <ChangePassword card_head="Set New Password"/>

      </div>
    </DashboardLayout>
  )
}

export default page