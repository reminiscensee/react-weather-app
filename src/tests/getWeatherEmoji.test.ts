import { test, expect } from 'vitest';
import { getWeatherEmoji } from '../getWeatherEmoji';

test("should return sun for clear sky during the day", () => {
    expect(getWeatherEmoji(0, 1)).toBe('☀️');
});
test("should return moon for clear sky at night", () => {
    expect(getWeatherEmoji(0, 0)).toBe('🌙');
});
test("should return default question mark for unknown code", () => {
    expect(getWeatherEmoji(999)).toBe('❓');
});