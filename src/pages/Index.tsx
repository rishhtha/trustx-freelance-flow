
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectsList from '@/components/projects/ProjectsList';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                <span className="gradient-text">Trusted Freelancing</span> with Blockchain Security
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                TrustX is a decentralized marketplace connecting freelancers and clients with
                secure smart contract escrow, transparent on-chain reputations, and no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/marketplace">Explore Projects</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] rounded-full bg-primary/20 blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=800&h=600"
                alt="TrustX Platform"
                className="relative z-10 w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why TrustX?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're solving the biggest problems in freelancing with blockchain technology
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Secure Escrow</CardTitle>
                <CardDescription>
                  Funds are safely locked in a smart contract until work is delivered and approved
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>No risk of non-payment for freelancers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Clients only pay for completed work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Transparent dispute resolution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-2" />
                <CardTitle>On-Chain Reputation</CardTitle>
                <CardDescription>
                  Verified reviews and ratings stored permanently on the blockchain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>No fake reviews or ratings manipulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Verified work history builds trust</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Portable reputation across platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <ArrowRight className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Low Platform Fees</CardTitle>
                <CardDescription>
                  Just 2-5% transaction fees, compared to 10-20% on centralized platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>More earnings for freelancers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Better value for clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>No hidden fees or charges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <Button asChild variant="outline">
              <Link to="/marketplace">View All Projects</Link>
            </Button>
          </div>
          
          <ProjectsList limit={3} showSearch={false} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-trustx-purple to-trustx-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the TrustX platform today and experience the future of decentralized freelancing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/marketplace">Find Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/post-project">Post a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
