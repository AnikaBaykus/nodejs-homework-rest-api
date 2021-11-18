const { userModel } = require('../../model')
const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')

const userDir = path.join(__dirname, '../../', 'public/avatars')

const updateAvatar = async(req, res) => {
  const { id } = req.user
  const { path: tmpPath, originalname } = req.file
  const updatePatch = path.join(userDir, id, originalname)

  try {
    const img = await Jimp.read(tmpPath)
    await img.resize(250, 250).write(tmpPath)

    await fs.rename(tmpPath, updatePatch)
    const avatar = `/public/avatars/${id}/${originalname}`
    await userModel.User.findByIdAndUpdate(id, { avatarURL: avatar })

    res.status(200).json({
      message: {
        avatarURL: avatar,
      }
    })
  } catch (error) {
    await fs.unlink(res.path)
    throw error
  }
}
module.exports = {
  updateAvatar
}
