import fs from "fs";
import path from "path";

export type ImageSize = { width: number; height: number };

/**
 * Read the intrinsic size of a PNG or JPEG in `public/`, straight from its
 * header. Post teasers come in every aspect ratio, and next/image needs the
 * real dimensions to reserve the right space.
 */
export function imageSize(publicPath: string): ImageSize | null {
  let buffer: Buffer;
  try {
    buffer = fs.readFileSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return null;
  }

  // PNG: 8-byte signature, then the IHDR chunk with width and height.
  if (buffer.length > 24 && buffer.toString("ascii", 1, 4) === "PNG") {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }

  // JPEG: walk the segments until a start-of-frame marker, which carries the size.
  if (buffer.length > 4 && buffer.readUInt16BE(0) === 0xffd8) {
    let offset = 2;
    while (offset + 9 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      // SOF0–SOF15, minus the markers in that range that aren't frame headers.
      if (
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc
      ) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + buffer.readUInt16BE(offset + 2);
    }
  }

  return null;
}
