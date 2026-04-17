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

const WelcomeEmail = () => {
  const previewText = `Welcome to ((.Company)), ((.Username))!`;

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
                alt="Gopher"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              Welcome to <strong>((.Company))</strong>, ((.Username))!
            </Heading>
            <Text className="text-start text-sm">Hello ((.Username)),</Text>
            <Text className="text-start text-sm leading-relaxed">
              We're excited to have you onboard at <strong>((.Company))</strong>
              . We hope you enjoy your journey with us. If you have any
              questions or need assistance, feel free to reach out to any of the
              following Gophers:
            </Text>
            <div className="text-start text-sm leading-relaxed">
              <ul className="pl-3">
                ((range .Gophers))
                <li>((.))</li>
                ((end))
              </ul>
            </div>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="py-2.5 px-5 bg-white rounded-md border text-black text-sm font-semibold no-underline text-center"
                href={`https://go.dev`}
              >
                Get Started
              </Button>
            </Section>

            <Text className="text-start text-sm">
              Cheers,
              <br />
              The ((.Company)), Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
