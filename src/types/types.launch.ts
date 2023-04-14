export type Welcome = {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export type Result = {
    id:              string;
    url:             string;
    launchLibraryID: number | null;
    slug:            string;
    name:            string;
    imgURL:          null;
    status:          StatusClass;
    net:             Date;
    windowEnd:       Date;
    windowStart:     Date;
    inhold:          boolean;
    tbdtime:         boolean;
    tbddate:         boolean;
    probability:     number | null;
    holdreason:      string;
    failreason:      string;
    hashtag:         null;
    rocket:          Rocket;
    mission:         Mission;
    pad:             Pad;
    imageURL:        null | string;
    infographicURL:  null;
}

export type Mission = {
    id:              number;
    launchLibraryID: number | null;
    name:            string;
    description:     string;
    type:            string;
    orbit:           string;
    orbitAbbrev:     string;
}

export type Pad = {
    id:        number;
    agencyID:  number | null;
    name:      string;
    infoURL:   null;
    wikiURL:   string;
    mapURL:    string;
    latitude:  string;
    longitude: string;
    location:  PadLocation;
}

export type PadLocation = {
    id:          number;
    name:        string;
    countryCode: CountryCode;
}

export type CountryCode = "USA" | "CHN" | "IND";

export type Rocket = {
    id:              number;
    configuration:   RocketConfiguration;
    launcherStage:   LauncherStage[];
    spacecraftStage: SpacecraftStage | null;
}

export type RocketConfiguration = {
    id:                    number;
    launchLibraryID:       number | null;
    url:                   string;
    name:                  string;
    launchServiceProvider: LaunchServiceProvider;
}

export type LaunchServiceProvider = "SpaceX" | "China Aerospace Science and Technology Corporation" | "Indian Space Research Organization";

export type LauncherStage = {
    type:                 Type;
    reused:               boolean | null;
    launcherFlightNumber: number | null;
    launcher:             Launcher;
    landing:              Landing | null;
}

export type Landing = {
    attempt:     boolean;
    success:     null;
    description: string;
    location:    TypeClass;
    type:        TypeClass;
}

export type TypeClass = {
    name:        string;
    abbrev:      string;
    description: null | string;
}

export type Launcher = {
    id:              number;
    url:             string;
    details:         string;
    flightProven:    boolean;
    serialNumber:    string;
    status:          StatusEnum;
    previousFlights: number | null;
    imageURL:        null | string;
}

export type StatusEnum = "active" | "Active" | "N/A";

export type Type = "Core" | "Strap-On Booster";

export type SpacecraftStage = {
    id:          number;
    url:         string;
    destination: string;
    missionEnd:  null;
    spacecraft:  Spacecraft;
}

export type Spacecraft = {
    id:            number;
    url:           string;
    name:          string;
    serialNumber:  string;
    status:        StatusClass;
    description:   string;
    configuration: SpacecraftConfiguration;
}

export type SpacecraftConfiguration = {
    id:       number;
    url:      string;
    name:     string;
    type:     StatusClass;
    agency:   Agency;
    inUse:    boolean;
    imageURL: string;
}

export type Agency = {
    id:   number;
    url:  string;
    name: LaunchServiceProvider;
    type: string;
}

export type StatusClass = {
    id:   number;
    name: string;
}
