function 交錯放置 (最外層: number, 材料名稱: string) {
    縱 = 0
}
function 中空層 (外尺寸: number, 內尺寸: number, 材料名稱: string) {
    左上 = positions.add(
    pos(外尺寸 * 1, 層數, 外尺寸 * 1),
    中心位置
    )
    右下 = positions.add(
    pos(外尺寸 * -1, 層數, 外尺寸 * -1),
    中心位置
    )
    blocks.fill(
    blocks.blockByName(材料名稱),
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
function 網狀結構 (最外層: number, 填滿空格: boolean, 方塊資料: number, 方塊名稱: string) {
    if (true) {
        blocks.fill(
        blocks.blockWithData(IRON_TRAPDOOR, 12),
        positions.add(
        中心位置,
        pos(最外層, 層數, 最外層 * -1)
        ),
        positions.add(
        中心位置,
        pos(最外層, 層數, 最外層 * -1)
        ),
        FillOperation.Replace
        )
    }
    跳格 = 最外層 * -1
    while (跳格 <= 最外層) {
        blocks.fill(
        blocks.blockWithData(blocks.blockByName(方塊名稱), 方塊資料),
        positions.add(
        中心位置,
        pos(跳格, 層數, 最外層 * -1)
        ),
        positions.add(
        中心位置,
        pos(跳格, 層數, 最外層 * -1)
        ),
        FillOperation.Replace
        )
        blocks.fill(
        blocks.blockWithData(blocks.blockByName(方塊名稱), 方塊資料),
        positions.add(
        中心位置,
        pos(最外層 * -1, 層數, 跳格)
        ),
        positions.add(
        中心位置,
        pos(最外層 * -1, 層數, 跳格)
        ),
        FillOperation.Replace
        )
        跳格 += 2
    }
}
player.onChat("Bu", function () {
    層數 = 4
    for (let index = 0; index < 15; index++) {
        中空層(1, 0, blocks.nameOfBlock(STONE))
        層數 += 1
    }
    中空層(10, 0, blocks.nameOfBlock(STONE))
    層數 += 1
    中空層(10, 8, blocks.nameOfBlock(STONE))
    層數 += 1
    中空層(10, 9, blocks.nameOfBlock(STONE_BRICKS_SLAB))
    中空層(9, 8, blocks.nameOfBlock(WATER))
})
let 跳格 = 0
let 右下: Position = null
let 左上: Position = null
let 縱 = 0
let 中心位置: Position = null
let 層數 = 0
層數 = 0
中心位置 = world(0, 0, 0)
