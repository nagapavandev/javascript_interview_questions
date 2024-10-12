type Scoreboard = Record<'Alice' | 'Bob' | 'Charlie', number>;

const scores: Scoreboard = {
  Alice: 90,
  Bob: 85,
  Charlie: 80,
};

// Dynamic Keys
type FeatureFlags = Record<string, boolean>;

const featureFlags: FeatureFlags = {
  darkMode: true,
  newUI: false,
  betaFeatures: true,
};

enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
}

type StatusDescriptions = Record<Status, string>;

const statusDescriptions: StatusDescriptions = {
  [Status.Active]: 'The task is currently active.',
  [Status.Inactive]: 'The task is not active.',
  [Status.Pending]: 'The task is pending.',
};

