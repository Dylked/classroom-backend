type Schedule = {
    day: string;
    startTime: string;
    endTime: string;
};


type userRoles = "admin" | "teacher" | "student"

type RateLimitRole = UserRoles | "guest"