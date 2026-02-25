from PIL import Image, ImageFilter
import os

# 图片文件夹路径
assets_folder = r"E:\vscode\vscode projects\google ai studio\portfolio_2602181800\assets"

# 处理10张图片
for i in range(1, 11):
    filename = f"aigc1_art_design ({i}).png"
    filepath = os.path.join(assets_folder, filename)

    if os.path.exists(filepath):
        print(f"Processing: {filename}")
        img = Image.open(filepath)

        # 获取图片尺寸
        width, height = img.size

        # 水印大概在右下角，用一个较大的区域来模糊处理
        # 假设水印在右下角约 15% 的区域
        watermark_width = int(width * 0.20)
        watermark_height = int(height * 0.10)

        # 右下角区域坐标
        left = width - watermark_width
        top = height - watermark_height
        right = width
        bottom = height

        # 裁剪出水印区域
        watermark_area = img.crop((left, top, right, bottom))

        # 对水印区域应用高斯模糊
        blurred = watermark_area.filter(ImageFilter.GaussianBlur(radius=3))

        # 将模糊后的区域贴回原图
        img.paste(blurred, (left, top))

        # 保存为新文件名，避免覆盖原图
        output_filename = filename.replace(".png", "_no_watermark.png")
        output_path = os.path.join(assets_folder, output_filename)
        img.save(output_path)
        print(f"  Saved as: {output_filename}")
    else:
        print(f"File not found: {filename}")

print("\nDone!")
