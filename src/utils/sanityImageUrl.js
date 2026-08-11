import { sanityClient } from "sanity:client";
import { createImageUrlBuilder } from "@sanity/image-url";

// THIS IS TO GET THE IMAGE URL FROM SANITY TO SHOW ON THE PAGE.
const builder = createImageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default urlFor;