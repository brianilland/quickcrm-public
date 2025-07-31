'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const rows = [
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

// Action handlers
const handleView = (row: any) => {
  alert(`Viewing activity: ${row.subject}`);
};

const handleComplete = (row: any) => {
  alert(`Marked as complete: ${row.subject}`);
};

// Columns with Action menu
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'activityType', headerName: 'Activity Type', flex: 1 },
  { field: 'subject', headerName: 'Subject', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 2 },
  { field: 'status', headerName: 'Status', flex: 1 },
  { field: 'createdBy', headerName: 'Created By', flex: 1 },
  { field: 'dueDate', headerName: 'Due Date', flex: 1 },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    filterable: false,
    flex: 0.5,
    renderCell: (params) => {
      const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
      const open = Boolean(anchorEl);

      const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
      };

      const handleMenuClose = () => setAnchorEl(null);

      return (
        <>
          <IconButton size="small" onClick={handleMenuClick}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem
              onClick={() => {
                handleView(params.row);
                handleMenuClose();
              }}
            >
              View
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleComplete(params.row);
                handleMenuClose();
              }}
            >
              Complete
            </MenuItem>
          </Menu>
        </>
      );
    },
  },
];

export default function ActivitiesPage() {
  return (
    <DashboardCard title="My Activities">
      <Box sx={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </DashboardCard>
  );
}
