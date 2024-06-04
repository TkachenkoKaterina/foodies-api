export const listAllRecipesService = (search = {}) => {
  try {
    const { filter = {}, fields = "", settings = {} } = search;
    return Contact.find(filter, fields, settings).populate(
      "owner",
      "username email"
    );
  } catch (error) {
    console.error("Error fetching contacts: ", error);
    throw error;
  }
};
