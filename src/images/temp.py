from PIL import Image
import os

def resize_images_recursive(input_folder):
    # Loop through each file and subfolder in the input folder
    for root, dirs, files in os.walk(input_folder):
        for filename in files:
            if filename.endswith(('.jpg', '.jpeg', '.png')):
                try:
                    # Open the image file
                    image_path = os.path.join(root, filename)
                    img = Image.open(image_path)

                    # Resize the image to 2x2 pixels
                    img_resized = img.resize((2, 2))

                    # Save the resized image to the same folder with the same name
                    img_resized.save(image_path)

                    print(f"Resized and saved: {filename}")
                except Exception as e:
                    print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    # Specify the input folder
    input_folder = "D:/Temporary BI/Extras/REACT-WEBSITE-BI/src/images/testing"

    # Call the recursive function to resize images
    resize_images_recursive(input_folder)
