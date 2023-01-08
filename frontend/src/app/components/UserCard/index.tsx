import { Divider, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

import './index.css'

interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    cpf: string;
  }
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Paper className="user-card">
      <Typography variant="h5">{user.name}</Typography>
      <Divider/>
      <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
      <Typography variant="body1"><strong>CPF:</strong> {user.cpf}</Typography>
    </Paper>
  )
}