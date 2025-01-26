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


# Fog Horn
## Usage
By default, it has 0 charge, right-clicking it when holding a Wind Charge will give it 10 charges. Holding right-click when charged will blow away Leaf Litters, Wildflowers and Pink Petals. It also has a small chance of spreading lit fires (not Soul Fire). Each charge lasts for 5 seconds.

## Whirlwind Enchantment
If the Fog Horn is enchanted with Whirlwind, it will have a longer range, put out fires when used, and push the player in the opposite direction of where they are facing.

## Obtaining
Crafted from Mistral Ingot and Goat Horn

## Technical Notes
Use composite models to make a fake durability bar to display the charges.

## Ventilator
The Fog Horn is a crafting ingredient for Ventilator blocks. The Ventilator stores wind charges and works like the Fog Horn, depleting one charge every 5 seconds. If powered by redstone, the Ventilator will instead pull entities towards it.


# Zephyr Claymore
## Usage
Can parry attacks just like shields, and after 3 successful parries the next attack will deal increased damage and knockback

## Obtaning
Crafted with Mistral Ingot and Stick

## Technical Notes
Use composite models to indicate the parried attacks.


# Mistral Ingot
## Usage
Crafting material
## Obtaining
Found in the tombs of Ocelot temples or crafted with Netherite Ingot + Breeze Rod