import { notFound } from "next/navigation";
import { StoryCard } from "@/components/story-card";
import { getStoryCard } from "@/lib/queries";

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getStoryCard(slug);
  if (!card) notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Story Card</h1>
      <StoryCard card={card} expanded />
    </div>
  );
}
