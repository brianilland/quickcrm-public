'use client';

import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const activities = [
  {
    id: 'A001',
    type: 'Email',
    subject: 'Follow-up with client',
    description: 'Sent follow-up email after demo',
    status: 'Completed',
    statusColor: 'success.main',
    createdBy: 'Alice Johnson',
    dueDate: '2025-08-01',
  },
  {
    id: 'A002',
    type: 'Call',
    subject: 'Intro call',
    description: 'Initial call with lead from form',
    status: 'Pending',
    statusColor: 'warning.main',
    createdBy: 'David Kim',
    dueDate: '2025-08-03',
  },
  {
    id: 'A003',
    type: 'Meeting',
    subject: 'Proposal Review',
    description: 'Discuss contract and deliverables',
    status: 'In Progress',
    statusColor: 'primary.main',
    createdBy: 'Rachel Adams',
    dueDate: '2025-08-05',
  },
  {
    id: 'A004',
    type: 'Task',
    subject: 'Send brochure',
    description: 'Email company brochure to CTO',
    status: 'Overdue',
    statusColor: 'error.main',
    createdBy: 'James Lee',
    dueDate: '2025-07-28',
  },
];

export default function ActivitiesPage() {
  return (
    <DashboardCard title="Activity Log">
      <Box sx={{ overflow: 'auto', width: '100%' }}>
        <Table
          aria-label="activity table"
          sx={{ whiteSpace: 'nowrap', mt: 2 }}
        >
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="subtitle2" fontWeight={600}>ID</Typography></TableCell>
              <TableCell><Typography variant="subtitle2" fontWeight={600}>Type</Typography></TableCell>
              <TableCell><Typography variant="subtitle2" fontWeight={600}>Subject</Typography></TableCell>
              <TableCell><Typography variant="subtitle2" fontWeight={600}>Description</Typography></TableCell>
              <TableCell><Typography variant="subtitle2" fontWeight={600}>Status</Typography></TableCell>
              <TableCell><Typography variant="subtitle2" fontWeight={600}>Created By</Typography></TableCell>
              <TableCell><Typography variant="subtitle2" fontWeight={600}>Due Date</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {activity.id}
                  </Typography>
                </TableCell>
                <TableCell>{activity.type}</TableCell>
                <TableCell>{activity.subject}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell>
                  <Chip
                    label={activity.status}
                    size="small"
                    sx={{
                      backgroundColor: activity.statusColor,
                      color: '#fff',
                      px: 1,
                    }}
                  />
                </TableCell>
                <TableCell>{activity.createdBy}</TableCell>
                <TableCell>{activity.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
}
