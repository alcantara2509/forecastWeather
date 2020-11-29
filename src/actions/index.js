export const CURR_WEATHER = 'CURR_WEATHER';

export const currWeather = (brasilia, washington, london, joanesburgo) => ({
  type: CURR_WEATHER,
  brasilia,
  washington,
  london,
  joanesburgo,
});
