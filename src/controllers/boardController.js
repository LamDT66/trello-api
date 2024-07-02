import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    // Dieu huong du lieu sang tang service
    const createBoard = await boardService.createNew(req.body)

    // Co ket qua thi tra ve phia Client
    res.status(StatusCodes.CREATED).json(createBoard)
  } catch (error) { next(error) }
}

const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id

    // Dieu huong du lieu sang tang service
    const board = await boardService.getDetails(boardId)

    // Co ket qua thi tra ve phia Client
    res.status(StatusCodes.OK).json(board)
  } catch (error) { next(error) }
}

export const boardController = {
  createNew,
  getDetails
}
