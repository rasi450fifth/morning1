import { Card } from '@/components/ui/card';
import { Leaf, Snowflake, Sprout } from 'lucide-react';

export function NaturePractical() {
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });

  return (
    <section className="space-y-6">
      <h2 className="section-title">Nature & Seasonal Life</h2>
      
      <Card className="dashboard-card">
        <h3 className="subsection-title sage-green-accent mb-4">{currentMonth} in Virginia Gardens</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-dark-brown">What's Happening Now</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-center" data-testid="nature-fact-1">
                  <Leaf className="w-4 h-4 text-sage-green mr-2 flex-shrink-0" />
                  Trees are dormant, storing energy for spring
                </li>
                <li className="flex items-center" data-testid="nature-fact-2">
                  <Snowflake className="w-4 h-4 text-sky-blue mr-2 flex-shrink-0" />
                  Soil preparation time for spring planting
                </li>
                <li className="flex items-center" data-testid="nature-fact-3">
                  <Sprout className="w-4 h-4 text-coral-pink mr-2 flex-shrink-0" />
                  Indoor seed starting for tomatoes and peppers
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="bg-sage-green bg-opacity-10 p-3 rounded-lg" data-testid="task-planning">
                <h5 className="font-medium text-sage-green text-sm">Plan Your Garden</h5>
                <p className="text-xs text-gray-600">Order seeds, sketch layouts, research new varieties for this year's growing season.</p>
              </div>
              <div className="bg-sky-blue bg-opacity-10 p-3 rounded-lg" data-testid="task-wildlife">
                <h5 className="font-medium text-sky-blue text-sm">Wildlife Support</h5>
                <p className="text-xs text-gray-600">Keep bird feeders full and provide unfrozen water sources for winter wildlife.</p>
              </div>
              <div className="bg-coral-pink bg-opacity-20 p-3 rounded-lg" data-testid="task-indoor">
                <h5 className="font-medium text-white text-sm">Indoor Plants</h5>
                <p className="text-xs text-gray-100">Reduce watering and fertilizing. Most houseplants are dormant now.</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
