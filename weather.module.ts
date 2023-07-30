export interface WeatherData {
    lon: number
    lat: number
    timezone: string
    data: Daum[]
    city_name: string
    state_code: string
    country_code: string
  }
  
  export interface Daum {
    wind_spd: number
    wind_cdir_full: string
    slp: number
    datetime: string
    ts: number
    snow: number
    dewpt: number
    uv: number
    wind_dir: number
    ghi: number
    dhi: number
    precip: number
    weather: Weather
    temp: number
    app_temp: number
    snow_depth: number
    wind_gust_spd: number
    timestamp_utc: string
    pop: number
    ozone: number
    dni: number
    timestamp_local: string
    clouds_hi: number
    wind_cdir: string
    clouds_mid: number
    pod: string
    pres: number
    clouds_low: number
    solar_rad: number
    clouds: number
    vis: number
    rh: number
  }
  
  export interface Weather {
    description: string
    code: number
    icon: string
  }
  