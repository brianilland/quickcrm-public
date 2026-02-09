export type Activity = {
  id: number;
  activityType: string;
  subject: string;
  description: string;
  status: string;
  createdBy: string;
  dueDate: string;
};

const activities: Activity[] = [
  {
    id: 1,
    activityType: 'Call',
    subject: 'Follow up with Client X',
    description: 'Discuss progress and expectations',
    status: 'Open',
    createdBy: 'Alice',
    dueDate: '2025-08-01',
  },
  {
    id: 2,
    activityType: 'Email',
    subject: 'Send proposal',
    description: 'Send project proposal to Client Y',
    status: 'Completed',
    createdBy: 'Bob',
    dueDate: '2025-07-28',
  },
  {
    id: 3,
    activityType: 'Meeting',
    subject: 'Quarterly Review',
    description: 'Internal review with sales team',
    status: 'Scheduled',
    createdBy: 'Charlie',
    dueDate: '2025-08-05',
  },
];

export const getActivities = (): Activity[] => activities;
