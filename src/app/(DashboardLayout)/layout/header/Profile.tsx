'use client';
import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import { IconUser, IconMail, IconListCheck } from "@tabler/icons-react";
import UserInfo from "@/components/auth/UserInfo";
import SignOutButton from "@/components/SignOutButton";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        onClick={handleClick2}
        aria-controls="profile-menu"
        aria-haspopup="true"
        sx={{
          ...(Boolean(anchorEl2) && {
            color: "primary.main",
          }),
        }}
      >
        <Avatar
          src="/images/profile/user-1.jpg"
          alt="profile"
          sx={{ width: 35, height: 35 }}
        />
      </IconButton>

      <Menu
        id="profile-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: 220,
          },
        }}
      >
        <Box px={2} py={1}>
          <UserInfo />
        </Box>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <IconMail width={20} />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <IconListCheck width={20} />
          </ListItemIcon>
          <ListItemText>My Tasks</ListItemText>
        </MenuItem>

        <Box mt={1} py={1} px={2}>
          <SignOutButton />
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
