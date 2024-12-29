import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    joinDate: "January 2024"
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Name</label>
            <p className="text-lg">{user.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <p className="text-lg">{user.email}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Role</label>
            <p className="text-lg">{user.role}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Member Since</label>
            <p className="text-lg">{user.joinDate}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;