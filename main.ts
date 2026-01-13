player.onChat("Bu", function () {
    層數 = 4
    for (let index = 0; index < 15; index++) {
        中空層(1, 0, 中心位置, blocks.nameOfBlock(STONE))
        層數 += 1
    }
    中空層(10, 0, 中心位置, blocks.nameOfBlock(STONE))
    層數 += 1
    中空層(10, 8, 中心位置, blocks.nameOfBlock(STONE))
    層數 += 1
    中空層(10, 9, 中心位置, blocks.nameOfBlock(STONE_BRICKS_SLAB))
    中空層(9, 8, 中心位置, blocks.nameOfBlock(WATER))
})
function 中空層 (外尺寸: number, 內尺寸: number, 中: Position, 材料: string) {
    左上 = positions.add(
    pos(外尺寸 * 1, 層數, 外尺寸 * 1),
    中心位置
    )
    右下 = positions.add(
    pos(外尺寸 * -1, 層數, 外尺寸 * -1),
    中心位置
    )
    blocks.fill(
    blocks.blockByName(材料),
    右下,
    左上,
    FillOperation.Replace
    )
    左上 = positions.add(
    pos(內尺寸 * 1, 層數, 內尺寸 * 1),
    中心位置
    )
    右下 = positions.add(
    pos(內尺寸 * -1, 層數, 內尺寸 * -1),
    中心位置
    )
    blocks.fill(
    AIR,
    右下,
    左上,
    FillOperation.Replace
    )
}
function 網狀結構 (外層: number, 奇數: boolean, num: number, 材料: string) {
    跳格 = 外層 * -1
    blocks.fill(
    blocks.blockWithData(CHERRY_TRAPDOOR, 12),
    pos(外層, 層數, 外層 * -1),
    pos(外層 * -1, 層數, 外層),
    FillOperation.Replace
    )
    while (跳格 <= 外層) {
        blocks.fill(
        blocks.blockWithData(blocks.blockByName("stone"), 12),
        pos(外層, 層數, 外層 * -1),
        pos(外層 * -1, 層數, 外層),
        FillOperation.Replace
        )
        blocks.fill(
        GRASS,
        pos(0, 層數, 0),
        pos(0, 0, 0),
        FillOperation.Replace
        )
        跳格 += 2
    }
}
let 跳格 = 0
let 右下: Position = null
let 左上: Position = null
let 中心位置: Position = null
let 層數 = 0
層數 = 0
中心位置 = world(0, 0, 0)
