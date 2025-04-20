
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/projects/ProjectCard';
import ProfileCard from '@/components/profile/ProfileCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CircleDollarSign, Star, Briefcase, AlertTriangle } from 'lucide-react';

// Mock project data
const activeProjects = [
  {
    id: '1',
    title: 'NFT Marketplace Development',
    description: 'Looking for a developer to build a custom NFT marketplace with unique features for digital artists.',
    budget: '$3,000 - $5,000',
    deadline: 'Jun 15, 2025',
    skills: ['Solidity', 'React', 'Smart Contracts'],
    status: 'in-progress',
  },
  {
    id: '2',
    title: 'DeFi Dashboard UI/UX Design',
    description: 'Need a talented designer to create intuitive user interfaces for our DeFi dashboard application.',
    budget: '$1,500 - $2,500',
    deadline: 'May 30, 2025',
    skills: ['UI/UX', 'Figma', 'Web3'],
    status: 'in-progress',
  },
];

const completedProjects = [
  {
    id: '3',
    title: 'Smart Contract Security Audit',
    description: 'Performed a thorough audit of DeFi protocol smart contracts.',
    budget: '$4,000',
    deadline: 'Completed May 10, 2025',
    skills: ['Solidity', 'Security', 'Audit'],
    status: 'completed',
  },
];

const Dashboard = () => {
  const [walletConnected, setWalletConnected] = useState(true);
  const walletAddress = '0x1234567890abcdef';
  
  // Mock stats
  const stats = {
    activeBids: 3,
    activeProjects: 2,
    completedProjects: 1,
    totalEarnings: '$4,000',
    averageRating: 4.8,
  };

  if (!walletConnected) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-6">Connect Your Wallet</h1>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Please connect your wallet to access your dashboard and project information.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium">
            Connect Wallet
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          
          <div className="mb-8">
            <ProfileCard
              name="Alex Johnson"
              address={walletAddress}
              bio="Full-stack blockchain developer with 5 years of experience. Specialized in DeFi protocols and NFT platforms."
              skills={['Solidity', 'React', 'Node.js', 'Web3', 'Smart Contracts']}
              rating={4.8}
              completedProjects={12}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stats.activeProjects}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stats.completedProjects}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stats.totalEarnings}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stats.averageRating}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed Projects</TabsTrigger>
            <TabsTrigger value="disputes">Disputes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            {activeProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">You don't have any active projects.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed">
            {completedProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">You don't have any completed projects yet.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="disputes">
            <div className="text-center py-16">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">You don't have any disputes.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
