"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TITLE", uid: "title", sortable: true},
  {name: "RECRUITER", uid: "recruiter", sortable: true},
  {name: "LOCATION", uid: "country", sortable: true},
  {name: "JOB TYPE", uid: "job_type", sortable: true},
  {name: "POSTED DATE", uid: "date", sortable: true},
  {name: "SALARY RANGE", uid: "salary_range", sortable: true},
  {name: "EXPERIENCE", uid: "experience", sortable: true},
  {name: "EXPIRY STATUS", uid: "expired"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Expired", uid: "expired"},
];

const users = [
  {
    id: 1,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 2,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 3,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "expired"
  },
  {
    id: 4,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 5,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 6,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 7,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 8,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 9,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 10,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 11,
    title: "Tony Reichert",
    recruiter: "Katherine LongFord",
    location: "United States",
    jobtype: "Part Time",
    date: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  }
];

export {columns, users, statusOptions};
