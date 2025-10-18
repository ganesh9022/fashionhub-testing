import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Calendar } from 'lucide-react';

const Profile = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-foreground">Please sign in to view your profile</h2>
      </div>
    );
  }

  const isAdmin = user?.organizationMemberships?.[0]?.role === 'org:admin';

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-8">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{user.fullName || 'Not set'}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{user.primaryEmailAddress?.emailAddress}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p className="font-medium">
                  {new Date(user.createdAt!).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">Account Type</p>
              <Badge variant={isAdmin ? 'default' : 'secondary'}>
                {isAdmin ? 'Admin' : 'User'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Order History */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                You haven't placed any orders yet.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
