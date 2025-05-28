import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About PMB Security Services</h1>
          <p className="text-gray-600 mb-8">
            PMB Security Services is a company within the security industry hungry for quality service and best 
            result orientated company. We are a professional company based in Gauteng offering a wide variety of 
            security services and solutions for the trade and private sector. We cover Gauteng areas with quality 
            retail, industrial and domestic security services and pride ourselves in providing high quality service 
            for each individual client.
          </p>
          <p className="text-gray-600">
            We have developed long term relationships with our clients and organizations over the past years and 
            this goes hand in hand with our philosophy of serving our clients all the time. We rely on a team of 125 
            professional, pro-active, dedicated, competent, motivated and highly trained employees who take pride 
            in their work.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We provide quality services to our clients at affordable rates to suit the client's requirements. 
              We believe in treating our customers with respect and faith. We grow through creative invention 
              and innovation, we integrate honesty integrity and business ethics into all aspects of our business 
              functioning. We aim to build additional relationships within the industry that can benefit our 
              customers and to maintain our size so that a personal service will remain across all our clients.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Objectives</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Our main objective is to be the most reputable security company in the province.</li>
              <li>• To treat each client/business with respect all the time.</li>
              <li>• Have all our employees' certificates accredited by PSIRA.</li>
              <li>• To create employment and opportunities for sustainable growth.</li>
              <li>• Not to compete but simply provide quality services when required.</li>
            </ul>
          </div>
        </div>

        {/* Our Aim */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Aim</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• To provide service 'par excellence.'</li>
              <li>• To ensure that all our Managers are available to our clients 24 hours a day.</li>
              <li>• We also make sure we employ highly trained officers with relevant qualifications.</li>
              <li>• Commit ourselves to a service of the highest quality, and aim to be the security service of choice to quality driven organizations.</li>
              <li>• Abide by the values of sincerity, accountability and enthusiasm.</li>
              <li>• Prompt response to any problem arising on site.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}