-- CreateTable
CREATE TABLE "lists" (
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "lists_pkey" PRIMARY KEY ("userId","name")
);

-- CreateTable
CREATE TABLE "movie_lists" (
    "listOwner" TEXT NOT NULL,
    "listName" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "movie_lists_pkey" PRIMARY KEY ("listOwner","listName","movieId")
);

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_lists" ADD CONSTRAINT "movie_lists_listOwner_listName_fkey" FOREIGN KEY ("listOwner", "listName") REFERENCES "lists"("userId", "name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_lists" ADD CONSTRAINT "movie_lists_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
