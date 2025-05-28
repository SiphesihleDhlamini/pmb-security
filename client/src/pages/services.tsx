import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Search, Building, Camera, Bell } from "lucide-react";

export default function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer retail, domestic, commercial and industrial Security services,
            delivering comprehensive protection solutions with unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Guarding Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Professional security personnel for all types of properties and events.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Armed & Unarmed Guards</li>
                <li>• Event Security</li>
                <li>• Bouncers</li>
                <li>• Dog Patrols</li>
                <li>• Static Guards</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>VIP Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Professional close protection services and armed reaction teams.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personal Protection</li>
                <li>• Armed Reaction</li>
                <li>• Event Protection</li>
                <li>• High-Value Goods Transport</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Search className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Investigation Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Comprehensive investigation services for various scenarios.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Forensic Investigations</li>
                <li>• Stock Loss Investigations</li>
                <li>• Fraud & Corruption Investigations</li>
                <li>• Undercover Operations</li>
                <li>• Business Intelligence Investigations</li>
                <li>• Surveillance Activities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Camera className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Security Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Modern security technology solutions and installations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• CCTV Systems</li>
                <li>• Alarm Systems</li>
                <li>• Access Control</li>
                <li>• Security Consultations</li>
                <li>• System Recommendations</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Areas We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ul className="space-y-2 text-gray-600">
              <li>• Shopping Malls</li>
              <li>• Residential Flats</li>
              <li>• Private Houses</li>
              <li>• Town Houses</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>• Hospitals</li>
              <li>• Garages</li>
              <li>• Hotels</li>
              <li>• Guest Houses</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>• Lodges</li>
              <li>• Bed and Breakfast</li>
              <li>• Stadiums</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}