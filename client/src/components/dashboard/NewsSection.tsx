import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { fetchNews } from '@/lib/api-services';
import { ExternalLink } from 'lucide-react';

export function NewsSection() {
  const { data: news, isLoading, error } = useQuery({
    queryKey: ['/api/news'],
    queryFn: fetchNews,
    staleTime: 30 * 60 * 1000, // 30 minutes
  });

  if (isLoading) {
    return (
      <section className="space-y-6">
        <h2 className="section-title">Current Events</h2>
        <Card className="dashboard-card">
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="space-y-3">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="border-l-2 border-gray-200 pl-3">
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    );
  }

  if (error) {
    return (
      <section className="space-y-6">
        <h2 className="section-title">Current Events</h2>
        <Card className="dashboard-card">
          <div className="text-red-500 text-sm text-center py-8" data-testid="news-error">
            Unable to load news. Please check your internet connection.
          </div>
        </Card>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="section-title">Current Events</h2>
      
      <Card className="dashboard-card">
        <div className="grid md:grid-cols-3 gap-6">
          {/* International */}
          <div>
            <h3 className="subsection-title coral-pink-accent mb-3">International</h3>
            <div className="space-y-3">
              {news?.international.map((article, index) => (
                <div key={index} className="border-l-2 border-coral-pink pl-3" data-testid={`intl-article-${index}`}>
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-dark-brown hover:text-coral-pink transition-colors flex items-start gap-1"
                  >
                    {article.title}
                    <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  </a>
                </div>
              )) || (
                <div className="text-gray-500 text-sm">No international news available</div>
              )}
            </div>
          </div>

          {/* US News */}
          <div>
            <h3 className="subsection-title sky-blue-accent mb-3">United States</h3>
            <div className="space-y-3">
              {news?.us.map((article, index) => (
                <div key={index} className="border-l-2 border-sky-blue pl-3" data-testid={`us-article-${index}`}>
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-dark-brown hover:text-sky-blue transition-colors flex items-start gap-1"
                  >
                    {article.title}
                    <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  </a>
                </div>
              )) || (
                <div className="text-gray-500 text-sm">No US news available</div>
              )}
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="subsection-title sage-green-accent mb-3">Business</h3>
            <div className="space-y-3">
              {news?.business.map((article, index) => (
                <div key={index} className="border-l-2 border-sage-green pl-3" data-testid={`business-article-${index}`}>
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-dark-brown hover:text-sage-green transition-colors flex items-start gap-1"
                  >
                    {article.title}
                    <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  </a>
                </div>
              )) || (
                <div className="text-gray-500 text-sm">No business news available</div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
