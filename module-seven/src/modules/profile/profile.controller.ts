import type { Request, Response } from "express";
import { profileService } from "./profile.service";

const createProfile = async (req: Request, res: Response) => {
  try {
    const restult = await profileService.createProfileIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: "profile created successfully",
      data: restult.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
};

export const profileController = {
  createProfile,
};
