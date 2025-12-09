/**
 * The kinetic energy of a moving object is equal to
 * half the product of its mass and its speed squared.
 *
 * @param {number} mass - mass of the object (kg)
 * @param {number} speed - speed of the object (m/s)
 * @returns {number} the kinetic energy (J) of the moving object
 * @returns {number} NaN if either argument is not a number
 * @returns {undefined} undefined if mass is negative
 */
export function getKineticEnergy(mass, speed) {
  if (typeof mass !== "number" || typeof speed !== "number") {
    return NaN;
  }

  if (mass < 0) {
    return undefined;
  }

  return (mass * speed) / 2;
}
