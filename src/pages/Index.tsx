import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Users, CalendarCheck, Upload, GraduationCap } from "lucide-react";

const features = [
  {
    title: "Comprehensive Notes",
    desc: "Curated for Engineering, 10th, and 12th classes.",
    Icon: BookOpen,
  },
  {
    title: "Previous Year Questions (PYQ)",
    desc: "Practice from real exam papers to score higher.",
    Icon: FileText,
  },
  {
    title: "Expert Batches",
    desc: "Guided learning paths led by mentors.",
    Icon: Users,
  },
  {
    title: "Attendance Tracker",
    desc: "Track class presence with ease.",
    Icon: CalendarCheck,
  },
  {
    title: "Upload Content",
    desc: "Share notes and resources with peers.",
    Icon: Upload,
  },
  {
    title: "Quality Education",
    desc: "Tailored for BEU Patna learners.",
    Icon: GraduationCap,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      <header className="container py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Vidyasphere Home">
            <span className="text-2xl font-bold tracking-tight text-foreground">Vidyasphere</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "#about" },
              { label: "Batches", to: "#" },
              { label: "Notes", to: "#" },
              { label: "PYQ", to: "#" },
              { label: "Attendance", to: "#" },
              { label: "Contact", to: "#contact" },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="text-sm px-3 py-2 rounded-full text-foreground/90 hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full">Login</Button>
            <Button className="rounded-full">Sign Up</Button>
            <Button variant="secondary" className="rounded-full">Donate</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
              Welcome to <span className="text-brand-accent">Vidyasphere</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/90 max-w-2xl">
              A modern, minimal and professional learning platform for Engineering, 10th, and 12th students — with special focus on BEU Patna.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full">Get Started</Button>
              <Button size="lg" variant="outline" className="rounded-full">Explore Batches</Button>
            </div>
          </div>
        </section>

        <section className="container pb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, desc, Icon }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-secondary flex items-center justify-center">
                      <Icon className="size-5 text-foreground" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="container py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <article>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                About Vidyasphere
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Vidyasphere is a modern, minimal, and professional learning platform built
                for Engineering, 10th, and 12th students — with a special focus on BEU Patna learners.
                Learn with curated notes, PYQs, and guided batches designed for real results.
              </p>
              <ul className="mt-6 grid gap-3">
                <li className="flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-foreground/90">Engineering, 10th & 12th focused resources</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-foreground/90">BEU Patna aligned content and guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-foreground/90">Mentor-led batches and practice PYQs</span>
                </li>
              </ul>
            </article>
            <aside>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Empower every learner with simple, high‑quality resources and structured
                    learning paths—accessible anywhere, on any device.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <section id="contact" className="container pb-24">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Vidyasphere</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Have questions or suggestions? We’d love to hear from you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@vidyasphere.app" aria-label="Email Vidyasphere">
                  <Button className="rounded-full">Email Us</Button>
                </a>
                <a href="#about" aria-label="Learn more about Vidyasphere">
                  <Button variant="outline" className="rounded-full">Learn More</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
