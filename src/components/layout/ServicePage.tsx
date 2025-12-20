import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicePage({ params }: { params: { slug: string } }) {
    return (
        <PageLayout title="Leistung">
            <div className="max-w-3xl">
                <p className="text-xl text-gray-300 mb-8">
                    Hier entstehen detaillierte Informationen zu diesem Service.
                </p>
                <Button asChild>
                    <Link href="/kontakt">Jetzt anfragen</Link>
                </Button>
            </div>
        </PageLayout>
    );
}
