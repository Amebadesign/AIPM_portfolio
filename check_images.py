from PIL import Image
import os

# 检查艺术设计图片尺寸
print("=== 艺术设计图片尺寸 ===")
for i in range(1, 10):
    filename = f"E:\\vscode\\vscode projects\\google ai studio\\portfolio_2602181800\\assets\\aigc1_art_design ({i}).png"
    if os.path.exists(filename):
        with Image.open(filename) as img:
            print(f"aigc1_art_design ({i}).png: {img.size[0]}x{img.size[1]}")

# 检查平面设计图片尺寸
print("\n=== 平面设计图片尺寸 ===")
for i in range(1, 7):
    filename = f"E:\\vscode\\vscode projects\\google ai studio\\portfolio_2602181800\\assets\\aigc2_graphic_design ({i}).png"
    if os.path.exists(filename):
        with Image.open(filename) as img:
            print(f"aigc2_graphic_design ({i}).png: {img.size[0]}x{img.size[1]}")
