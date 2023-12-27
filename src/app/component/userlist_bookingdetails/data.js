"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "Nutritionist Name", uid: "nutritionist_name", sortable: true},
  {name: "Appointment", uid: "appointment", sortable: true},
  {name: "Booking ID", uid: "booking_id", sortable: true},
  {name: "Status", uid: "check_status", sortable: true}
];

const statusOptions = [
  {name: "Active", uid: "true"},
  {name: "Deactive", uid: "false"},
];

const users = [
  {
    id: 1,
    nutritionist_name: "Tony Reichert",
    appointment: "Jan 3 2024, 03:00 PM",
    booking_id: "NEWT543",
    check_status: "Re-Scheduled"
  },
  {
    id: 2,
    nutritionist_name: "Tony Reichert",
    appointment: "Jan 3 2024, 03:00 PM",
    booking_id: "NEWT543",
    check_status: "Scheduled"
  },
  {
    id: 3,
    nutritionist_name: "Tony Reichert",
    appointment: "Jan 3 2024, 03:00 PM",
    booking_id: "NEWT543",
    check_status: "Cancelled"
  },
  {
    id: 4,
    nutritionist_name: "Tony Reichert",
    appointment: "Jan 3 2024, 03:00 PM",
    booking_id: "NEWT543",
    check_status: "Completed"
  },
];

export {columns, users, statusOptions};
