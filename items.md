# Totem of Reprieve
## Usage
Triggers upon receiving lethal damage. If that damage was dealt by a mob the player receives 4s of Expiration, otherwise no effects are applied and the player remains at 1hp.
Expiration grants resistance, but kills the player when it reaches 0s.
If you can't kill the mob that triggered the totem to clear expiration and restore 10hp.
## Obtaining

## Technical notes
- Use `execute on attacker` to get the last entity that attacked the player
- make a marker ride the entity and store the uuid of the hit player uuid in it, in an array.
- if the marker doesn't have a vehicle, the mob died, and the player(s) whose uuids were stored in the marker will have Expiration removed.


# Aeroceptor
## Usage
By default, it has 0 charge, right-clicking it when holding a Wind Charge will give it 10 charges. Holding right-click when charged will blow away Leaf Litters, Wildflowers and Pink Petals. It also has a small chance of spreading lit fires (not Soul Fire). Each charge lasts for 5 seconds.

## Windlash Enchantment
If the Aeroceptor is enchanted with Windlash, it will have a longer range, put out fires when used, and push the player in the opposite direction of where they are facing.

## Obtaining

## Technical Notes
Use composite models to make a fake durability bar to display the charges.

## Blocks
Craft the Aeroceptor into a Ventilator block. The Ventilator stores wind charges and works like the aeroceptor, depliting one charge every 5 seconds. If powered by redstone, the Ventilator will instead pull entities towards it.