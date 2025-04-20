
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How TrustX Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform uses blockchain technology to create a trustless environment for freelancers and clients
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">Step 1</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Connect Your Wallet</h2>
              <p className="text-muted-foreground mb-4">
                Start by connecting your cryptocurrency wallet to the TrustX platform. This serves as your identity and allows you to interact with our smart contracts.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Compatible with MetaMask, WalletConnect, and other popular wallets</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>No username or password to remember</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Your wallet address becomes your secure identity</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1599476232871-29fda0994eac?auto=format&fit=crop&w=800&h=600" 
                    alt="Connect Wallet" 
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 md:order-1 lg:order-0">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&h=600" 
                    alt="Project Creation" 
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-7 md:order-0 lg:order-1">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">Step 2</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Create or Find Projects</h2>
              <p className="text-muted-foreground mb-4">
                Clients can post new projects with detailed requirements, budgets, and deadlines. Freelancers can browse available projects and submit proposals.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Detailed project descriptions and requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Clear budget and timeline expectations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Transparent proposal process for freelancers</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">Step 3</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Smart Contract Escrow</h2>
              <p className="text-muted-foreground mb-4">
                Once a client selects a freelancer, they deposit the project funds into our secure smart contract escrow, which holds the payment until work is completed.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Secure fund holding in blockchain smart contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>No risk of non-payment for freelancers</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Clients only pay for completed and approved work</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1561414926-7f3f921a2e18?auto=format&fit=crop&w=800&h=600" 
                    alt="Smart Contract Escrow" 
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 md:order-1 lg:order-0">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&h=600" 
                    alt="Project Delivery" 
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-7 md:order-0 lg:order-1">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">Step 4</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Project Completion and Payment</h2>
              <p className="text-muted-foreground mb-4">
                Upon successful project delivery, the client reviews the work and releases the payment from escrow to the freelancer.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Freelancers submit deliverables through the platform</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Clients review and approve completed work</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Automatic payment release after approval</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">Step 5</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Blockchain-Based Reputation</h2>
              <p className="text-muted-foreground mb-4">
                After project completion, both parties leave ratings and reviews that are permanently stored on the blockchain, building verifiable reputation over time.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Immutable ratings and reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>Build verifiable reputation over time</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground mr-2">✓</span>
                  <span>No fake reviews or rating manipulation</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&h=600" 
                    alt="Blockchain Reputation" 
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/marketplace">Explore Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/post-project">Post a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
