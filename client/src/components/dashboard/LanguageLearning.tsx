import { Card } from '@/components/ui/card';
import { getTodaysFrenchNouns, getTodaysFrenchVerb, getTodaysGrammarLesson } from '@/lib/content-database';

export function LanguageLearning() {
  const nouns = getTodaysFrenchNouns();
  const verb = getTodaysFrenchVerb();
  const grammar = getTodaysGrammarLesson();

  return (
    <section className="space-y-6">
      <h2 className="section-title">French Learning</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Vocabulary */}
        <Card className="dashboard-card">
          <h3 className="subsection-title soft-purple-accent mb-4">Daily Vocabulary</h3>
          <div className="space-y-4">
            {nouns.map((noun, index) => (
              <div key={index} className="p-3 bg-light-accent rounded-lg" data-testid={`french-noun-${index}`}>
                <div className="font-semibold text-dark-brown">{noun.french}</div>
                <div className="text-sm text-gray-600">{noun.english}</div>
                <div className="text-xs text-gray-500 mt-1">"{noun.example}"</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Verb Conjugation */}
        <Card className="dashboard-card">
          <h3 className="subsection-title coral-pink-accent mb-4">{verb.verb}</h3>
          <div className="space-y-2">
            <div className="flex justify-between" data-testid="conjugation-je">
              <span className="text-gray-600">je</span>
              <span className="font-medium">{verb.conjugations.je}</span>
            </div>
            <div className="flex justify-between" data-testid="conjugation-tu">
              <span className="text-gray-600">tu</span>
              <span className="font-medium">{verb.conjugations.tu}</span>
            </div>
            <div className="flex justify-between" data-testid="conjugation-il">
              <span className="text-gray-600">il/elle</span>
              <span className="font-medium">{verb.conjugations.il}</span>
            </div>
            <div className="flex justify-between" data-testid="conjugation-nous">
              <span className="text-gray-600">nous</span>
              <span className="font-medium">{verb.conjugations.nous}</span>
            </div>
            <div className="flex justify-between" data-testid="conjugation-vous">
              <span className="text-gray-600">vous</span>
              <span className="font-medium">{verb.conjugations.vous}</span>
            </div>
            <div className="flex justify-between" data-testid="conjugation-ils">
              <span className="text-gray-600">ils/elles</span>
              <span className="font-medium">{verb.conjugations.ils}</span>
            </div>
          </div>
        </Card>

        {/* Grammar Lesson */}
        <Card className="dashboard-card">
          <h3 className="subsection-title sage-green-accent mb-4">Grammar Tip</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-dark-brown" data-testid="grammar-title">
              {grammar.title}
            </h4>
            <p className="text-sm text-gray-700" data-testid="grammar-explanation">
              {grammar.explanation}
            </p>
            <div className="text-xs text-gray-600 bg-light-accent p-2 rounded" data-testid="grammar-example">
              <strong>Example:</strong> {grammar.example}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
