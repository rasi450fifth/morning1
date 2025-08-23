import { Card } from '@/components/ui/card';
import { getTodaysArtwork, getTodaysEtymology, getTodaysLiterature } from '@/lib/content-database';

export function ArtsCulture() {
  const artwork = getTodaysArtwork();
  const etymology = getTodaysEtymology();
  const literature = getTodaysLiterature();

  return (
    <section className="space-y-6">
      <h2 className="section-title">Arts & Culture</h2>
      
      <div className="space-y-6">
        {/* Art Spotlight */}
        <Card className="dashboard-card">
          <h3 className="subsection-title soft-purple-accent mb-4">Masterpiece Spotlight</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <img 
                src={artwork.imageUrl}
                alt={artwork.title}
                className="rounded-lg shadow-md w-full h-48 object-cover"
                data-testid="artwork-image"
              />
            </div>
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xl font-bold text-dark-brown" data-testid="artwork-title">
                "{artwork.title}"
              </h4>
              <div className="text-sm text-gray-600" data-testid="artwork-artist">
                {artwork.artist}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed" data-testid="artwork-description">
                {artwork.description}
              </p>
              <div className="text-xs text-soft-purple font-medium" data-testid="artwork-location">
                Location: {artwork.location}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Etymology */}
          <Card className="dashboard-card">
            <h3 className="subsection-title coral-pink-accent mb-4">Word Origins</h3>
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-dark-brown" data-testid="etymology-word">
                {etymology.word}
              </h4>
              <div className="text-sm text-gray-600" data-testid="etymology-pronunciation">
                {etymology.pronunciation}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed" data-testid="etymology-origin">
                {etymology.origin}
              </p>
              <div className="text-xs text-coral-pink font-medium" data-testid="etymology-meaning">
                Meaning: {etymology.meaning}
              </div>
            </div>
          </Card>

          {/* Literature */}
          <Card className="dashboard-card">
            <h3 className="subsection-title sky-blue-accent mb-4">Literary Opening</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-dark-brown" data-testid="literature-title">
                "{literature.title}"
              </h4>
              <div className="text-sm text-gray-600" data-testid="literature-author">
                {literature.author}
              </div>
              <blockquote className="text-sm text-gray-700 leading-relaxed italic border-l-4 border-sky-blue pl-4" data-testid="literature-opening">
                "{literature.opening}"
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
