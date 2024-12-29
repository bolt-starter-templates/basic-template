import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [visits, setVisits] = useState(1205);
  const [activeUsers, setActiveUsers] = useState(42);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{visits.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{activeUsers}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome to React Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a simple demonstration of React concepts including:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Component composition</li>
            <li>State management with useState</li>
            <li>Routing with React Router</li>
            <li>Responsive design with Tailwind CSS</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;