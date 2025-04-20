
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatusBadge from '@/components/projects/StatusBadge';
import ProfileCard from '@/components/profile/ProfileCard';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock project data
const mockProject = {
  id: '1',
  title: 'NFT Marketplace Development',
  description: 'Looking for an experienced developer to build a custom NFT marketplace with unique features for digital artists. The marketplace should support various file types, have a modern UI, and include features like auctions, fixed-price sales, and royalties for creators. The smart contracts should be secure and gas-efficient.',
  budget: '$3,000 - $5,000',
  deadline: 'Jun 15, 2025',
  createdAt: 'May 5, 2025',
  skills: ['Solidity', 'React', 'Smart Contracts', 'Web3.js', 'TypeScript'],
  status: 'open',
  client: {
    name: 'Alex Johnson',
    address: '0xb794f5ea0ba39494ce839613fffba74279579268',
    avatar: '',
    rating: 4.8,
    projectsPosted: 7,
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [proposalText, setProposalText] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectWallet = () => {
    // Mock wallet connection
    setIsConnected(true);
    toast({
      title: "Wallet Connected",
      description: "Your wallet has been successfully connected.",
    });
  };

  const handleSubmitProposal = () => {
    if (!proposalText.trim()) {
      toast({
        title: "Empty Proposal",
        description: "Please write a proposal before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Mock proposal submission
    toast({
      title: "Proposal Submitted",
      description: "Your proposal has been successfully submitted to the client.",
    });
    setProposalText('');
  };

  // Simulate loading project data
  if (!mockProject) {
    return (
      <Layout>
        <div className="container py-8 text-center">
          <p>Loading project details...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Details - Main Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h1 className="text-3xl font-bold mb-2 md:mb-0">{mockProject.title}</h1>
              <StatusBadge status="awaiting_payment" />
            </div>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Project Description</h2>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {mockProject.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Skills Required</h2>
                  <div className="flex flex-wrap gap-2">
                    {mockProject.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Budget</h2>
                    <p className="text-muted-foreground">{mockProject.budget}</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Deadline</h2>
                    <p className="text-muted-foreground">{mockProject.deadline}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="submit-proposal" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="submit-proposal">Submit Proposal</TabsTrigger>
                <TabsTrigger value="escrow-details">Escrow Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="submit-proposal">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit Your Proposal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!isConnected ? (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground mb-4">
                          Connect your wallet to submit a proposal for this project.
                        </p>
                        <Button onClick={handleConnectWallet}>
                          Connect Wallet
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Describe why you're the perfect fit for this project..."
                          value={proposalText}
                          onChange={(e) => setProposalText(e.target.value)}
                          className="min-h-32"
                        />
                        <Button onClick={handleSubmitProposal}>
                          Submit Proposal
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="escrow-details">
                <Card>
                  <CardHeader>
                    <CardTitle>Smart Contract Escrow</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      This project uses TrustX's secure smart contract escrow system to protect both freelancers and clients.
                    </p>
                    
                    <div className="border rounded-lg p-4 bg-accent/50">
                      <h3 className="font-semibold mb-2">How It Works:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-2">
                          <span className="font-mono bg-primary/20 px-1 rounded">1.</span>
                          <span>Client funds the escrow when hiring a freelancer</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-mono bg-primary/20 px-1 rounded">2.</span>
                          <span>Funds are locked in the smart contract during development</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-mono bg-primary/20 px-1 rounded">3.</span>
                          <span>When work is approved, payment is automatically released</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-mono bg-primary/20 px-1 rounded">4.</span>
                          <span>Any disputes are handled through our resolution system</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">View Smart Contract</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Escrow Smart Contract</DialogTitle>
                            <DialogDescription>
                              The code for the escrow smart contract that will be used for this project.
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="bg-zinc-950 text-zinc-50 p-4 rounded-md overflow-x-auto text-xs font-mono">
                            <pre>
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract TrustXEscrow {
    address public client;
    address public freelancer;
    address public platform;
    
    uint256 public amount;
    uint256 public releaseTime;
    bool public funded;
    bool public released;
    bool public disputed;
    
    event Funded(address indexed client, uint256 amount);
    event Released(address indexed freelancer, uint256 amount);
    event Disputed(address indexed client);
    
    constructor(
        address _client,
        address _freelancer,
        address _platform,
        uint256 _amount,
        uint256 _lockTime
    ) {
        client = _client;
        freelancer = _freelancer;
        platform = _platform;
        amount = _amount;
        releaseTime = block.timestamp + _lockTime;
    }
    
    // More contract code would be here...
}`}
                            </pre>
                          </div>
                          
                          <DialogFooter className="sm:justify-start">
                            <Button variant="secondary" className="mt-2">
                              View on Etherscan
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar - Client Information */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About the Client</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ProfileCard
                  name={mockProject.client.name}
                  address={mockProject.client.address}
                  avatar={mockProject.client.avatar}
                  bio="Tech entrepreneur with a focus on Web3 projects. I work with talented freelancers to build innovative applications."
                  skills={['NFTs', 'DeFi', 'Web3']}
                  rating={mockProject.client.rating}
                  completedProjects={mockProject.client.projectsPosted}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Posted On</p>
                    <p className="text-sm text-muted-foreground">{mockProject.createdAt}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Budget</p>
                    <p className="text-sm text-muted-foreground">{mockProject.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Deadline</p>
                    <p className="text-sm text-muted-foreground">{mockProject.deadline}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Project ID</p>
                    <p className="text-sm text-muted-foreground font-mono">{mockProject.id}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
