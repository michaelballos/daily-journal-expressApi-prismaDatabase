import React from 'react';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import { ReceiptOff, Flame, CircleDotted, FileCode } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: ReceiptOff,
    title: 'No Bullshit',
    description: 'A Completely free productivity app. No ads, no tracking, and future continous updates. The best productivity app.',
  },
  {
    icon: FileCode,
    title: 'Journal And Notes',
    description: 'Write down your thoughts and feelings. No need to worry about forgetting.',
  },
  {
    icon: CircleDotted,
    title: 'Fast And Simple',
    description:
      'The app is designed to be fast and simple. No need to worry about the app being slow or complicated.',
  },
  {
    icon: Flame,
    title: 'The Coolest Daily App',
    description:
      'More than just a productivity app. Extra added features and open to suggestions.',
  },
];

export default function FrontPage() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Get Shit Done
          </Title>
          <Text color="dimmed">

          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            <a href='/api/auth/login'>
              Get started by creating a new account
            </a>
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}