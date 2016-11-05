/**
 * @author nstCactus
 * @date 24/10/16 13:39
 */

declare module Ds18b20 {
	export function list(callback?: (error: Error, deviceIds: Array<string>) => void): Array<string>;

	export function readSimpleC(decimals?: number, callback?: (error: Error, reading: number) => void): number;
	export function readSimpleC(callback?: (error: Error, reading: number) => void): number;

	export function readSimpleF(decimals?: number, callback?: (error: Error, reading: number) => number): number;
	export function readSimpleF(callback?: (error: Error, reading: number) => number): number;

	export function readC(deviceId: string, decimals?: number, callback?: (error: Error, reading: number) => number): number;
	export function readC(deviceId: string, callback?: (error: Error, reading: number) => number): number;

	export function readF(deviceId: string, decimals?: number, callback?: (error: Error, reading: number) => number): number;
	export function readF(deviceId: string, callback?: (error: Error, reading: number) => number): number;

	export function readAllC(decimals?: number, callback?: (error: Error, readings: Array<number>) => Array<number>): Array<number>;
	export function readAllC(callback?: (error: Error, readings: Array<number>) => Array<number>): Array<number>;

	export function readAllF(decimals?: number, callback?: (error: Error, readings: Array<number>) => Array<number>): Array<number>;
	export function readAllF(callback?: (error: Error, readings: Array<number>) => Array<number>): Array<number>;

	export function setW1Directory(devicePath: string): void;
}
