export interface IGroup {
  value: string,
  byte: string
}

export interface ICapability {
  value: string,
  min: number,
  max: number,
  color: string,
  res: string
}

export interface IChannel {
  name: string,
  group: IGroup,
  capabilities: ICapability[]
}

export interface IChannelMapping {
  name: string,
  number: number
}

export interface IMode {
  name: string,
  channelMappings: IChannelMapping[]
}

export interface IFixtureDefinition {
  manufacturer: string,
  name: string,
  type: number,
  channels: IChannel[],
  modes: IMode[]
}