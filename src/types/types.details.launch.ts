export type DWelcome = {
  id: string;
  url: string;
  launch_library_id: null;
  slug: string;
  name: string;
  img_url: null;
  status: Status;
  net: Date;
  window_end: Date;
  window_start: Date;
  inhold: boolean;
  tbdtime: boolean;
  tbddate: boolean;
  probability: null;
  holdreason: string;
  failreason: string;
  hashtag: null;
  rocket: Rocket;
  mission: Mission;
  pad: Pad;
  infoURLs: string[];
  vidURLs: string[];
  image_url: null;
  infographic_url: null;
};

export type Mission = {
  id: number;
  launch_library_id: null;
  name: string;
  description: string;
  type: string;
  orbit: string;
  orbit_abbrev: string;
};

export type Pad = {
  id: number;
  agency_id: null;
  name: string;
  info_url: null;
  wiki_url: string;
  map_url: string;
  latitude: string;
  longitude: string;
  location: PadLocation;
};

export type PadLocation = {
  id: number;
  name: string;
  country_code: string;
};

export type Rocket = {
  configuration: Configuration;
  launcher_stage: LauncherStage[];
  spacecraft_stage: null;
};

export type Configuration = {
  id: number;
  launch_library_id: number;
  url: string;
  name: string;
  description: string;
  family: string;
  full_name: string;
  launch_service_provider: LaunchServiceProvider;
  variant: string;
  alias: string;
  min_stage: number;
  max_stage: number;
  length: number;
  diameter: number;
  maiden_flight: Date;
  launch_mass: number;
  leo_capacity: number;
  gto_capacity: number;
  to_thrust: number;
  apogee: number;
  vehicle_range: null;
  image_url: string;
  info_url: string;
  wiki_url: string;
};

export type LaunchServiceProvider = {
  id: number;
  url: string;
  name: string;
  featured: boolean;
  type: string;
  country_code: string;
  abbrev: string;
  description: string;
  administrator: string;
  founding_year: string;
  launchers: string;
  spacecraft: string;
  launch_library_url: string;
  successful_launches: number;
  failed_launches: number;
  pending_launches: number;
  info_url: string;
  wiki_url: string;
  logo_url: string;
  image_url: string;
  nation_url: string;
};

export type LauncherStage = {
  type: string;
  reused: boolean;
  launcher_flight_number: number;
  launcher: Launcher;
  landing: Landing;
};

export type Landing = {
  attempt: boolean;
  success: null;
  description: string;
  location: TypeClass;
  type: TypeClass;
};

export type TypeClass = {
  name: string;
  abbrev: string;
  description: string;
};

export type Launcher = {
  id: number;
  url: string;
  details: string;
  flight_proven: boolean;
  serial_number: string;
  status: string;
  previous_flights: number;
  image_url: string;
};

export type Status = {
  id: number;
  name: string;
};
