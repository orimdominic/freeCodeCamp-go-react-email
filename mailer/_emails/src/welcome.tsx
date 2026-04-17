import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

interface WelcomeEmailProps {
  username?: string;
  company?: string;
  gophers?: string[];
}

const WelcomeEmail = ({
  username = "Nicole",
  company = "GoWorld",
  gophers = ["Tinky Winky", "Dipsy", "Laa-Laa", "Po"],
}: WelcomeEmailProps) => {
  const previewText = `Welcome to ${company}, ${username}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="m-auto font-sans">
          <Container className="mb-10 mx-auto p-5 max-w-[465px]">
            <Section className="mt-10">
              <Img
                src={`https://storage.googleapis.com/gopherizeme.appspot.com/gophers/69428e5ec867c34bb4a49d5a063fdbc2a6633aed.png`}
                width="80"
                height="80"
                alt="Logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              Welcome to <strong>{company}</strong>, {username}!
            </Heading>
            <Text className="text-start text-base">Hello {username},</Text>
            <Text className="text-start text-base leading-relaxed">
              We're excited to have you onboard at <strong>{company}</strong>.
              We hope you enjoy your journey with us. If you have any questions
              or need assistance, feel free to reach out to any of the following
              gophers:
            </Text>
            <div className="text-start text-base leading-relaxed">
              <ul className="pl-3">
                {gophers.map((gopher) => (
                  <li>{gopher}</li>
                ))}
              </ul>
            </div>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="py-2.5 px-5 bg-white rounded-md text-base font-semibold no-underline text-center bg-black text-white"
                href={`https://go.dev`}
              >
                Get Started
              </Button>
            </Section>
            <Text className="text-start text-base text-white">
              Cheers,
              <br />
              The {company} Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
